<?php

namespace App;
Use App\User;
Use App\Base;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Base extends Authenticatable
{
    use Notifiable;

    public function emp(){

        return $this->hasOne('App/Emp','ssn','ssn');

    }

    public function admin(){

        return $this->hasOne('App/Admin','ssn','ssn');

    }

    public function user(){

        return $this->hasOne('App/User','ssn','ssn');

    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ssn','name','email','first_name','last_name','date_of_birth','gender','street','city','distric', 'phone1','phone2','obranch','department','designation','fixed_allowance','fixed_deduction','is_OT_allowed','bank','bbranch','acc','Is_User','Is_Admin','Is_Employee'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
         'remember_token',
    ];


}
