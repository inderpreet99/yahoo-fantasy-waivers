function getTopWaiver(node) {
  curr = node;
  while (curr.previous()) {
    curr = curr.previous()
  }
  return curr;
}

function resetWaiverPriorities(topWaiver) {
  curr = topWaiver;
  counter = 1;
  while (curr) {
    curr.one("select").set("value", counter);
    counter++;
    curr = curr.next();
  }
}
function makeSortable() {
  YUI().use('sortable', function (Y) {

    var sortable;

    // Our sortable list instance.
    sortable = new Y.Sortable({
      container: '.Table tbody',
      nodes: 'tr',
      opacity: '0.1'
    });

    sortable.delegate.after('drag:end', function (e) {
      var node = sortable.delegate.get('currentNode');
      topWaiver = getTopWaiver(node);
      resetWaiverPriorities(topWaiver);
    });


  });
}

makeSortable();