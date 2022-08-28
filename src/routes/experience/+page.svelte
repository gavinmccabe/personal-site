<script lang="ts">
	import type { Experience } from "$lib/types";

	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import ExperienceItem from "$lib/components/ExperienceItem.svelte";

	let experiences: Experience[] = [
		{
			title: "Software Development Engineering Intern - Quantum",
			company: "AWS Center for Quantum Computing",
			dates: "June 2023 - Present",
			description:
				"Software engineering intern on the control stack team supporting AWS's efforts to build an error-correcting quantum computer."
		},
		{
			title: "Chief Technology Officer",
			company: "MG Venture, LLC.",
			dates: "October 2020 - Present",
			description:
				"Supports a software team overseeing the development of the Hangr iOS application.  Served as a bridge between technical engineers and other business-focused employees to oversee a beta rollout to over 15 locations nationwide."
		},
		{
			title: "Technical Consultant",
			company: "Gnosko Associates, Inc.",
			dates: "September 2021 - Present",
			description:
				"Provide subject-matter expertise and training support to U.S. government and private industry training programs, requiring demonstrated proficiency, while operating in both classroom and field training environments."
		},
		{
			title: "Head Teaching Assistant - Web Development (CS 132)",
			company: "Caltech Division of Computing and Mathematical Sciences",
			dates: "March 2022 - June 2022",
			description:
				"Assited professors with onboarding new teaching assistants.  Created new assignments for students.  Handled administrative tasks and created custom tools for teaching assistants to use to view and grade student submissions."
		},
		{
			title: "Teaching Assistant - Fundamentals of Computer Programming (CS 4)",
			company: "Caltech Division of Computing and Mathematical Sciences",
			dates: "January 2022 - March 2022",
			description:
				"Hosted office hours to answer student questions.  Supported students in learning the basics of functional programming in OCaml.  Graded student assignments."
		},
		{
			title: "Head Teaching Assistant - Introduction to Computer Programming (CS 1)",
			company: "Caltech Division of Computing and Mathematical Sciences",
			dates: "September 2021 - December 2021",
			description:
				"Assited professors with onboarding new teaching assistants.  Graded assignments and provided detailed feedback to students and teaching assistants.  Handled administrative tasks such as grading in-lecture coding assignments, assigning graders to assignments, and assisting professors during lecture."
		},
		{
			title: "Teaching Assistant - Web Development (CS 101)",
			company: "Caltech Division of Computing and Mathematical Sciences",
			dates: "March 2021 - June 2021",
			description:
				"Created new assignments for students.  Handled administrative tasks and created custom tools for teaching assistants to use to view and grade student submissions.  Hosted twice-weekly office hours to assist students."
		},
		{
			title: "Teaching Assistant - Introduction to Computer Programming (CS 1)",
			company: "Caltech Division of Computing and Mathematical Sciences",
			dates: "September 2020 - December 2020",
			description:
				"Hosted office hours for students to answer questions about assignments.  Graded weekly assignments and exams.  Selected as in-class TA to answer student questions during lecture."
		}
	];
</script>

<Navbar />
<main>
	<h1>Experience</h1>
	{#each experiences as experience}
		<ExperienceItem {experience} />
	{/each}
</main>
<Footer />

<style>
	main {
		margin: 0 20%;
		color: #21243d;
	}

	h1 {
		font-size: 44px;
		font-weight: 700;
		margin-top: 85px;
		margin-bottom: 50px;
	}
</style>
