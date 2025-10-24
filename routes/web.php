<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.beranda');
});

Route::get('/contact', function () {
    return view('pages.contact');
});