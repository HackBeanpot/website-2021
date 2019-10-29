import React, {Fragment} from 'react'
import TeamData from 'data/meet-the-team.json';


const TeamMember = props => (
    <Fragment>
        <div className="text-center">
            <div className="team-member-circle mb-3"></div>
            <h5 class="team-member__name">{props.name}</h5>
            <p>{props.position}</p>
        </div>
    </Fragment>
)

class Team extends React.Component {

    constructor(props) {
        super(props)

        this.renderLeadership = this.renderLeadership;
        this.renderDesign = this.renderDesign;
        this.renderOutreach = this.renderOutreach;
        this.renderSocial = this.renderSocial;
        this.renderSponsorship = this.renderSponsorship;
        this.renderTech = this.renderTech;
    }

    renderLeadership(section) {
        return (
            <Fragment class="mt-4">
                <div class="d-flex justify-content-around">
                    <div class="mx-5">
                        <TeamMember name={section.members[0].name}
                                    position={section.members[0].position} />
                    </div>
                    <div class="mx-5">
                        <TeamMember name={section.members[1].name}
                                    position={section.members[1].position} />
                    </div>
                </div>
            </Fragment>
        )
    }

    renderDesign(section) {
        return (
            <Fragment class="mt-4">
                <h3 class="team__title">Design</h3>
                <div class="d-flex justify-content-around">
                    <div class="mx-5">
                        <TeamMember name={section.members[0].name}
                                    position={section.members[0].position} />
                    </div>
                    <div class="mx-5">
                        <TeamMember name={section.members[1].name}
                                    position={section.members[1].position} />
                    </div>
                    <div class="mx-5">
                        <TeamMember name={section.members[2].name}
                                    position={section.members[2].position} />
                    </div>
                </div>
                <div class="d-flex justify-content-around">
                    <div class="mx-5">
                        <TeamMember name={section.members[3].name}
                                    position={section.members[3].position} />
                    </div>
                    <div class="mx-5">
                        <TeamMember name={section.members[4].name}
                                    position={section.members[4].position} />
                    </div>
                </div>
            </Fragment>
        )
    }

    renderOutreach(section) {
        return (
            <Fragment class="mt-4">
                <h3 class="team__title">Outreach</h3>
                <div class="d-flex justify-content-around">
                    <div class="mx-5">
                        <TeamMember name={section.members[0].name}
                                    position={section.members[0].position} />
                    </div>
                    <div class="mx-5">
                        <TeamMember name={section.members[1].name}
                                    position={section.members[1].position} />
                    </div>
                </div>
                <div class="d-flex justify-content-around">
                    <div class="mx-5">
                        <TeamMember name={section.members[2].name}
                                    position={section.members[2].position} />
                    </div>
                    <div class="mx-5">
                        <TeamMember name={section.members[3].name}
                                    position={section.members[3].position} />
                    </div>
                </div>
            </Fragment>
        )
    }

    renderSocial(section) {
        return (
            <Fragment class="mt-4">
                <h3 class="team__title">Social</h3>
                <div class="d-flex justify-content-around">
                    <div class="">
                        <TeamMember name={section.members[0].name}
                                    position={section.members[0].position} />
                    </div>
                </div>
            </Fragment>
        )
    }

    renderSponsorship(section) {
        return (
            <Fragment>
                <h3 class="team__title">Sponsorship</h3>
                <div class="d-flex justify-content-around">
                    <div class="mx-5">
                        <TeamMember name={section.members[0].name}
                                    position={section.members[0].position} />
                    </div>
                    <div class="mx-5">
                        <TeamMember name={section.members[1].name}
                                    position={section.members[1].position} />
                    </div>
                </div>
                <div class="d-flex justify-content-around">
                    <div class="mx-5">
                        <TeamMember name={section.members[2].name}
                                    position={section.members[2].position} />
                    </div>
                    <div class="mx-5">
                        <TeamMember name={section.members[3].name}
                                    position={section.members[3].position} />
                    </div>
                </div>
            </Fragment>
        )
    }

    renderTech(section) {
        return (
            <Fragment>
                <h3 class="team__title">Tech</h3>
                <div class="d-flex justify-content-around">
                    <div class="mx-5">
                        <TeamMember name={section.members[0].name}
                                    position={section.members[0].position} />
                    </div>
                    <div class="mx-5">
                        <TeamMember name={section.members[1].name}
                                    position={section.members[1].position} />
                    </div>
                </div>
                <div class="d-flex justify-content-around">
                    <div class="mx-5">
                        <TeamMember name={section.members[2].name}
                                    position={section.members[2].position} />
                    </div>
                    <div class="mx-5">
                        <TeamMember name={section.members[3].name}
                                    position={section.members[3].position} />
                    </div>
                </div>
            </Fragment>
        )
    }
    render() {
        return(
            <Fragment>
                <div className="leadership">
                    <div className="container">
                        <div className="team-header">
                            <h1 className="header__title">Meet the Team behind HackBeanpot</h1>
                            <p className="header__description">We are a group of ~20 driven students who aim to make technical experience and
                            knowledge accessible to anyone. In the months leading up to our hackathon in
                            February, we work hard both within and across our five teams - Design, Outreach,
                            Social Media, Sponsorship, and Tech! </p>
                        </div>
                        {this.renderLeadership(TeamData[0])}
                    </div> 
                </div>
                <div class="pale-blue-bg">
                    <div className="container">
                        {this.renderDesign(TeamData[1])}
                        {this.renderOutreach(TeamData[2])}
                        {this.renderSocial(TeamData[3])}
                        {this.renderSponsorship(TeamData[4])}
                        {this.renderTech(TeamData[5])}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Team;