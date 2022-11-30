<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EmployeeController;
use App\Http\Controllers\Api\EmpresasController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
return $request->user();
});

Route::controller(EmployeeController::class)->group(function (){
Route::get('/employees', 'index');
Route::post('/employee', 'store');
Route::get('/employee/{id}', 'show');
Route::put('/employee/{id}', 'update');
Route::delete('/employee/{id}', 'destroy');
});

Route::controller(EmpresasController::class)->group(function (){
Route::get('/empresas', 'index');
Route::post('/empresas', 'store');
Route::get('/empresas/{id}', 'show');
Route::put('/empresas/{id}', 'update');
Route::delete('/empresas/{id}', 'destroy');

});