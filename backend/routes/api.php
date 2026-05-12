<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

// PUBLIC
Route::post('/login', [AuthController::class, 'login']);

// REGISTER - 2 steps
Route::post('/register-send-code', [AuthController::class, 'registerSendCode']);
Route::post('/register-verify', [AuthController::class, 'registerVerify']);
Route::post('/verify-code', [AuthController::class, 'verifyCode']);

// PROTECTED
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    Route::middleware('admin')->group(function () {
        Route::get('/admin/users', [AdminController::class, 'getAllUsers']);
        Route::delete('/admin/users/{id}', [AdminController::class, 'deleteUser']);
        Route::put('/admin/users/{id}/role', [AdminController::class, 'updateRole']);
        Route::get('/admin/stats', [AdminController::class, 'getStats']);
    });
});