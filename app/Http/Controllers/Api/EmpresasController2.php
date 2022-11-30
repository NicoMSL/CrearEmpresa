<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmpresasController extends Controller
{
/**
* Display a listing of the resource.
*
* @return \Illuminate\Http\Response
*/
public function index()
{
$empresas = Empresas::all();
return $empresas;
}

/**
* Store a newly created resource in storage.
*
* @param \Illuminate\Http\Request $request
* @return \Illuminate\Http\Response
*/
public function store(Request $request)
{
$empresas = new Empresas();
$empresas->nombre = $request->nombre;
$empresas->activar_empresa = $request->activar_empresa;
$empresas->imagen = $request->imagen;

$empresas->save();
}

/**
* Display the specified resource.
*
* @param int $id
* @return \Illuminate\Http\Response
*/
public function show($id)
{
$empresas = Empresas::find($id);
return $empresas;
}

/**
* Update the specified resource in storage.
*
* @param \Illuminate\Http\Request $request
* @param int $id
* @return \Illuminate\Http\Response
*/
public function update(Request $request, $id)
{
$empresas = Empresas::findOrFail($request->id);
$empresas->nombre = $request->nombre;
$empresas->activar_empresa = $request->activar_empresa;
$empresas->imagen = $request->imagen;

$empresas->save();
return $empresas;
}

/**
* Remove the specified resource from storage.
*
* @param int $id
* @return \Illuminate\Http\Response
*/
public function destroy($id)
{
$empresas = Empresas::destroy($id);
return $empresas;
}
}