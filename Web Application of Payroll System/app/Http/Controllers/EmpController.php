<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Emp;
class EmpController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:emp');
    }



  


        /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }
}
