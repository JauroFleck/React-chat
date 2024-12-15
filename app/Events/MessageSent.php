<?php
 
namespace App\Events;
 
use App\Models\Message;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class MessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct(
        public Message $message
    ) {}

    /**
     * Get the channel the event should broadcast on.
     */
    public function broadcastOn(): Channel
    {

        Log::info('MessageSent broadcastOn');

        $channelName = 'chat.' . (
            $this->message->user_id > $this->message->receiver_id
                ? $this->message->user_id . '.' . $this->message->receiver_id
                : $this->message->receiver_id . '.' . $this->message->user_id
        );

        return new PrivateChannel($channelName);
    }
}