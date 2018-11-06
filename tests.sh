sleep 5
if curl todo | grep -q '<title>Todo list with AngularJS</title>'; then
  echo "Tests passed!"
  exit 0
else
  echo "Tests failed!"
  exit 1
fi