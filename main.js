document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issueId = chance.guid();
  var issueStatus = 'Open';

  var issue - {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  }

  //inserting the object in local storage, first checking if there is something  in local localStorage
  if(localStorage.getItem('issues') == null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issue));
  }
}


function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesList = document.getElementById('issuesList');

  issuesList.innnerHTML = '';

  for (var i=0; 1< issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

    issuesList.innnerHTML += '<div class="well">'+
                             '<h6>Issue ID: ' + id '</h6>'+
                             '<p><span class="label label-info">' + status + '</span></p>'+
                             '<h3>' + desc + '</h3>' +
                             '<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>' +
                             '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>' +
                             '<a href="#" onClick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>'+
                             '<a href="#" onClick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'
                             '</div>';

  }
}
