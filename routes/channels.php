<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('chat.{higher_user_id}.{lower_user_id}', function (User $user, int $higher_user_id, int $lower_user_id) {
    return $user->id === $higher_user_id || $user->id === $lower_user_id;
});
