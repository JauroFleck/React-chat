<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Message extends Model
{
    protected $fillable = ['user_id', 'receiver_id', 'message'];

    protected $appends = ['user'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }

    public function getUserAttribute()
    {
        return $this->user()->first();
    }
}
