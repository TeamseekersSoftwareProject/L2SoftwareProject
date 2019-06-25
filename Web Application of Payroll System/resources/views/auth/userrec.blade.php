<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	    
    	<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Admin Control Pannel</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/customemprec.css">
    <link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet">
        </head>
        <body class='whole'>
        
        <div class="placing">
        <a href="{{route('ahome')}}" class="btn btn-danger">Back</a>
        <a class="btn btn-primary" href="{{ route('logout') }}"
                                
                                onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">
                                   <span><i class="fa fa-sign-out"></i></span>        
                                   <span>Logout</span>
                   </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                   {{ csrf_field() }}
        </form>
        </div>
        <div class="pos-1">
        <center><h4 class='mains'>User Management</h4></center>
        <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                

                <div class="card-body">
                    <table  class='mytable' id='myTable'>
                    <thead>
                    <tr>
                <th>SSN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Designation</th>
                
                <th>Action</th>
                
                
            </tr>
                    </thead>
                    <tbody>
					@foreach($bases as $user)

					<tr>

					<td >{{$user->ssn}}</td>
					<td>{{$user->first_name}}</td>
					<td>{{$user->email}}</td>
                    <td>{{$user->gender}}</td>
                    <td>{{$user->designation}}</td>
                    <td>{{$user->department}}</td>
					
                    <td>
                    
                    @foreach($users as $user1)
                    <form id='conf' action="/deleteuser/{{ $user1->id}}{{$user->id }}" method='post' >
                    
                    {{ csrf_field() }}
                    {{ method_field('delete') }}
                    

                    <input type='submit' value='Delete' class="btn btn-danger">
                    </form>
                    </td>
                    </tr>
					@endforeach
                    @endforeach
					</tbody>

                    </table>

                </div>
                </div>
				<br/><br/>
                        <a href="{{route('register')}}" class="btn btn-success">Add New User</a>
                        
				</div>
            </div>
        </div>
    </div>
</div>
</div>
</body>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script>
$(document).ready( function () {
    $('#myTable').DataTable();
} );



</script>
</html>
