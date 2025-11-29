@extends('layouts.app')

@section('content')
<h5 class="text-center mb-3 text-primary text-capitalize">{{ $slug }} Games</h5>
@include('welcome') <!-- reuse the same structure -->
@endsection
