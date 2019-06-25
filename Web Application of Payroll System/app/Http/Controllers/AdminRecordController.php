<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//use RealRashid\SweetAlert\Facades\Alert;
//Use Alert;
use App\Admin;
use App\Base;
class AdminRecordController extends Controller
{
    public function show()
{

    

//$emps=Emp::get();

//return view('emprec',['emps'=>$emps]);
$bases1 =Base::all();
$admins =Admin::all();
$bases=$bases1->where('Is_Admin',1);
return view('admin.adminrec',compact(['bases','admins']));

}


public function delete($id3){

//Admin::destroy($id1);
//Admin::destroy($id3);
Base::destroy($id3);

return redirect('adminlist');


//$select=Base::where('ssn', '=', 'ssn1')->value('id');
//Base::destroy(DB::table('bases')->where('ssn', '$ssn1')->value('id'));
//return redirect('adminlist');

}




}
