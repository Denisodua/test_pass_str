import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-password',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './password.component.html',
    styleUrl: './password.component.scss'
})

export class PasswordComponent {
    strengthClasses: string[] = ['default', 'default', 'default'];

    onPasswordInput(event: Event): void {
        const password = (event.target as HTMLInputElement).value;
        this.updateStrength(password);
    }

    updateStrength(password: string): void {
        if (!password) {
            this.strengthClasses = ['default', 'default', 'default'];
            return;
        }

        if (password.length < 8) {
            this.strengthClasses = ['weak', 'weak', 'weak'];
            return;
        }

        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (hasLetters && hasNumbers && hasSymbols) {
            this.strengthClasses = ['strong', 'strong', 'strong'];
        } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
            this.strengthClasses = ['medium', 'medium', 'default'];
        } else {
            this.strengthClasses = ['weak', 'default', 'default'];
        }
    }
}
