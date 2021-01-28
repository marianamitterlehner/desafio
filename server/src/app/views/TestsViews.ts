import Test from '../models/Test';
import Student from '../models/Student';
import Template from '../models/Template';

export default {
    render(test: Test) {
        return{
            id: test.id,
            name: Student.name,
            template: Template.answer,
            answer: test.answer,
            examresult: test.examresult
            
        }
    },

    renderMany(test: Test[]){
        return test.map(test => this.render(test));
    }
}