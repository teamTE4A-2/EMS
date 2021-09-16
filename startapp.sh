#!/bin/sh
chmod +x /tmp/startSpringapp.sh
systemctl daemon-reload
systemctl restart springapp.service