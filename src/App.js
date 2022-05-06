import React,{ Component } from 'react';
import Studentslist from './Studentslist';
import './App.css'
import Scroll from './Scroll';
import SearchBox from './SearchBox';


class App extends Component {
    constructor() {
        super()
            this.state = {
                students: [],
                searchfield: ''
            }   
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({students:users}))
      
    }
 
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render(){
        const {students, searchfield} = this.state;
        const filteredStudents = students.filter(student =>{
            return student.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        return(
               
                    <div className="container text-center">
                        <h1 >Students Profiles</h1>
                        <br/>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                        <Studentslist  students={filteredStudents}/>
                        </Scroll>
                    </div>)
                ;
           
        
      
    }
}


export default App;