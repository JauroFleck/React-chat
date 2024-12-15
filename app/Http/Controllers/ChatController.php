<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Message;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function chat(User $user)
    {
        if ($user->id === auth()->id()) {
            abort(404);
        }

        $messages = Message::where('receiver_id', auth()->id())
                        ->where('user_id', $user->id)
                        ->orWhere('receiver_id', $user->id)
                        ->where('user_id', auth()->id())
                        ->get();

        return Inertia::render('ChatPage', [
            'user' => $user,
            'messages' => Message::where('receiver_id', auth()->id())->orWhere('user_id', auth()->id())->get()->toArray()
        ]);
    }

    public function sendMessage(User $user)
    {
        $validated = request()->validate([
            'message' => 'required|string'
        ]);

        $sender = auth()->user();

        $message = $sender->messages()->create([
            'receiver_id' => $user->id,
            'message' => $validated['message'],
        ]);

        MessageSent::dispatch($message);

        return response()
                ->json([
                    'status' => 'success',
                ]);
    }
}
