## Real-time chat with Laravel + React
*Using Laravel Reverb and Laravel Echo*

*  Installation  
After installing back and front dependencies, configuring `.env` and setting up the database, use `php artisan serve` to run the server and `npm run dev` to start react, `php artisan queue:work` to run the queue and finally `php artisan reverb:start` to start broadcasting.
* Use  
Just login with any default user from the database seeder, and go to /chat/with/{user_id} route to start chatting.
