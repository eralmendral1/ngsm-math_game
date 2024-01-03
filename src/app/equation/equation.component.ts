import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormControl, FormGroup } from '@angular/forms'
import { MathValidators } from '../math-validators'
import { delay, filter } from 'rxjs'

@Component({
    selector: 'app-equation',
    templateUrl: './equation.component.html',
    styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
    mathForm = new FormGroup({
        a: new FormControl(this.randomNumber()),
        b: new FormControl(this.randomNumber()),
        answer: new FormControl('')
    }, [
        MathValidators.addition('answer', 'a', 'b')
    ])

    ngOnInit(): void {
        this.mathForm.statusChanges.pipe(filter(value => value === 'VALID'), delay(200))
            .subscribe(value => {
                this.mathForm.setValue({
                    a: this.randomNumber(),
                    b: this.randomNumber(),
                    answer: ''
                })
            })
    }

    get a() {
        console.log(this.mathForm.value.a)
        return this.mathForm.value.a
    }

    get b() {
        console.log(this.mathForm.value.b)
        return this.mathForm.value.b
    }

    randomNumber() {
        return Math.floor(Math.random() * 10)
    }
}
