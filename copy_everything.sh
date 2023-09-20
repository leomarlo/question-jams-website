#! /bin/bash

scp -i "question_jams_xyz.pem" -r .env ubuntu@ec2-3-65-64-12.eu-central-1.compute.amazonaws.com:~/website/.env
