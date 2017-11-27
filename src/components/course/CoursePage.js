import React from "react";
import {connect} from "react-redux";
import * as courseActions from "../actions/courseActions";

class CoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.onTitleChanged = this.onTitleChanged.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.state = {
            course: { title: "" }
        }
    }
    onTitleChanged(e) {
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({course:course});
    }
    onClickSave (){
       this.props.dispatch(courseActions.createCourser(this.state.course));
    }
    courseRow(course,index){
        return <div key={index}>{course.title}</div>
    }
    render() {
        return (
            <div>
            {this.props.courses.map(this.courseRow)}
                <h1>Coursers</h1>
                <h2>Add Courses</h2>
                <input type="text" onChange={this.onTitleChanged}
                    value={this.state.course.title}
                />
                <input type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
 return {
     courses: state.courses
 }
}
export default connect(mapStateToProps) (CoursePage);