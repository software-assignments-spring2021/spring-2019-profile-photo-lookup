import React, { Component } from 'react';
import './result.css'

class Result extends Component {

    renderStudents = (students) => {
        if(students){
            var html = []
            for (var i = 0; i < students.length; i++){
                const s = students[i]
                html.push(
                    <p key={i}>
                    {s.first} {s.last}: {s.school} Class of {s.year}
                    </p>
                )
            }
            return html
        }
    }

    renderInner(){
        if(this.props.students){
            var students = this.props.students
            return this.renderStudents(students)
        }
    }

    render() {
        return (
            <div>
                {this.renderInner()}
            </div>
        );
    }

}

export default Result
