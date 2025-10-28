<?php

use Illuminate\Support\Facades\Route;

// Route::get('admin/user', function () {
//     return view('admin.user.index');
// });

Route::view('admin/user/index','admin.user.index')->name('admin.user.index');

Route::view('admin/category/index','admin.category.index')->name('admin.category.index');

Route::view('admin/room/index','admin.room.index')->name('admin.room.index');