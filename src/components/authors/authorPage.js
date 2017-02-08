var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
	getInitialState :function(){
			return{
				authors:[]
			}
	},

 	componentWillMount: function(){
 		this.setState({authors:AuthorApi.getAllAuthors()})
 	},

	render:function(){
		var createAuthorRow = function(author){
			return (
					<tr key={author.id}>
						<td>{author.id}</td>
						<td>{author.firstName}</td>
						<td>{author.lastName}</td>
					</tr>
					
				)
		};

		return(
			<div>
				<h1>Author</h1>

				<table className="table">
					<thead>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
					</thead>
					<tbody>
						{this.state.authors.map(createAuthorRow, this)}
					</tbody>
				</table>
			
				
			</div>
			)
	}
});


module.exports= Authors;