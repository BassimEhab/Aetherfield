import { Service, signal } from '@angular/core';
import { ITeam } from '../interfaces/iteam';

@Service()
export class TeamService {
    private teamSignal = signal<ITeam[]>([
        { name: 'Eunji Park', title: 'Founder', contact: 'e.park@aetherfield.com' },
        { name: 'Al Gorithm', title: 'Senior Systems Architect', contact: 'a.gorithm@aetherfield.com' },
        { name: 'Cassandra Query', title: 'Head of Data Platforms', contact: 'c.query@aetherfield.com' },
        { name: 'Sue Logic', title: 'Principal Software Engineer', contact: 's.logic@aetherfield.com' },
        { name: 'Dash Bordman', title: 'Product Manager', contact: 'd.bordman@aetherfield.com' },
        { name: 'Greta Watt', title: 'Director of Climate Strategy', contact: 'g.watt@aetherfield.com' },
        { name: 'Gail Force', title: 'Environmental Risk Analyst', contact: 'g.force@aetherfield.com' },
        { name: 'Polly Nation', title: 'UX Designer', contact: 'p.nation@aetherfield.com' },
        { name: 'Will O\'Watt', title: 'Clean Energy Solutions Manager', contact: 'w.owatt@aetherfield.com' },
        { name: 'Lana Terra', title: 'Earth Systems Research', contact: 'l.terra@aetherfield.com' },
        { name: 'Ella Vation', title: 'Earth Systems Researcher', contact: 'e.vation@aetherfield.com' },
        { name: 'Phil Scope', title: 'Lifecycle Assessment Lead', contact: 'p.scope@aetherfield.com' },
    ]);

    public team = this.teamSignal.asReadonly();
}

