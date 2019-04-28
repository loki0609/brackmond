<?php

namespace App;

class State {
    public static function build()
    {
        return [
            'username' => 'Matt',
            'loggedIn' => false,
            'clients'  => self::getClients(),
            'workers'  => self::getWorkers(),
            'jobs'     => self::getJobs(),
        ];
    }

    public static function getClients()
    {
        return Client::all();
    }

    public static function getWorkers()
    {
        return Worker::all();
    }

    public static function getJobs()
    {
        return Job::all();
    }
}