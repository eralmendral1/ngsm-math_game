import { Component } from '@angular/core'
import { AbstractControl, FormControl, FormGroup } from '@angular/forms'
import { MathValidators } from '../math-validators'

@Component({
    selector: 'app-equation',
    templateUrl: './equation.component.html',
    styleUrls: ['./equation.component.css']
})
export class EquationComponent {
    mathForm = new FormGroup({
        a: new FormControl(''),
        b: new FormControl(''),
        answer: new FormControl('')
    }, [
        MathValidators.addition('answer', 'a', 'b')
    ])

    get a() {
        return this.mathForm.value.a
    }

    get b() {
        return this.mathForm.value.b
    }

    randomNumber() {
        return Math.floor(Math.random() * 10)
    }
}
