Environment variables:
    PORT : host port for the web service, default 3000

Installation (build the docker image):
    docker build -t purple-cow .

Running the server:
    docker run -dp 3000:3000 purple-cow

TODO:
    Add Makefile to manage installation and run.
    Add support for localization of strings.
    Add linting to build.
    Add tests and coverage reports.
