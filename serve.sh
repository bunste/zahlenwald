#!/bin/bash

PORT=8000
DIR="."

echo "Starte Server auf http://localhost:$PORT"
echo "Drücke STRG+C zum Beenden."

python3 -m http.server "$PORT" --directory "$DIR"
