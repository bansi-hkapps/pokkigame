<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;


class BlogController extends Controller
{

    public function index(Request $request)
    {
        $search = $request->get('search');

        $blogs = Blog::when($search, function ($query, $search) {
            $query->where('title', 'like', "%{$search}%");
        })
            ->orderByDesc('id')
            ->paginate(10); // 10 blogs per page

        return view('admin.blog.index', compact('blogs'));
    }



    public function create()
    {
        return view('admin.blog.create');
    }


    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // ✅ Store image in public/blogs folder
        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('blogs'), $imageName);

        Blog::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => 'blogs/' . $imageName, // ✅ consistent relative path
        ]);

        return redirect()->route('admin.blog.index')->with('success', 'Blog created successfully!');
    }




    public function show($id)
    {
        //
    }


    public function edit(Blog $blog)
    {
        return view('admin.blog.edit', compact('blog'));
    }

    public function update(Request $request, Blog $blog)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // ✅ If new image uploaded, replace old one
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($blog->image && file_exists(public_path($blog->image))) {
                unlink(public_path($blog->image));
            }

            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('blogs'), $imageName);

            $validated['image'] = 'blogs/' . $imageName;
        }

        $blog->update($validated);

        return redirect()->route('admin.blog.index')->with('success', 'Blog updated successfully!');
    }


    public function destroy(Blog $blog)
    {
        // Delete image file if exists
        if ($blog->image && file_exists(public_path($blog->image))) {
            unlink(public_path($blog->image));
        }

        // Delete blog record
        $blog->delete();

        return redirect()->route('admin.blog.index')
            ->with('success', 'Blog deleted successfully.');
    }

}
