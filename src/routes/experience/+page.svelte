<script lang="ts">
	import type { Experience } from "$lib/types";
	import { Page } from "$lib/types";

	import ExperienceItem from "$lib/components/ExperienceItem.svelte";
	import Navbar from "$lib/components/Navbar.svelte";

	let experiences: Experience[] = [
		{
			title: "Teaching Assistant - Relational Databases (CS 121)",
			company: "Caltech",
			dates: "January 2023 - Present",
			description:
				"Assist professor with course logistics, grading assignments, provide detailed feedback to students, and offering office hours for additional support."
		},
		{
			title: "Head Cooking Class Assistant",
			company: "Caltech",
			dates: "September 2022 - Present",
			description:
				"Assist instructors in running the Caltech cooking class (SA 16).  Responsibilities include coordinating class logistics, helping students in the kitchen, and providing demos and feedback on various techniques."
		},
		{
			title: "Technical Consultant",
			company: "Gnosko Associates, Inc.",
			dates: "September 2021 - Present",
			description:
				"Provide subject-matter expertise and training support to U.S. government and private industry training programs, requiring demonstrated proficiency, while operating in both classroom and field training environments."
		},
		{
			title: "Software Development Engineering Intern - Quantum",
			company: "AWS Center for Quantum Computing",
			dates: "June 2022 - September 2022",
			description:
				"Software engineering intern on the control stack team supporting AWS's efforts to build an error-correcting quantum computer."
		},
		{
			title: "Chief Technology Officer",
			company: "MG Venture, LLC.",
			dates: "October 2020 - October 2022",
			description:
				"Supports a software team overseeing the development of the Hangr iOS application.  Served as a bridge between technical engineers and other business-focused employees to oversee a beta rollout to over 15 locations nationwide."
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

<Navbar page={Page.Experience} />
<main>
	<h1>Experience</h1>
	{#each experiences as experience}
		<ExperienceItem {experience} />
	{/each}
</main>

<style>
	main {
		margin: 0 20%;
		color: #21243d;
	}

	h1 {
		font-size: 44px;
		font-weight: 900;
		margin-top: 85px;
		margin-bottom: 50px;
	}
</style>
