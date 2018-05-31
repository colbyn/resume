# Setup - Initialization
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd );
ROOT_DIR_RAW=$(dirname "$DIR")/../;
ROOT_DIR=$(cd $ROOT_DIR_RAW && pwd)

cd $ROOT_DIR


# Pre-Exec Specific Setup
cd ./etc/browser-target/

# Exec
http-server 127.0.0.1 --p 5000


