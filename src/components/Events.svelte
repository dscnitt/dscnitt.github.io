<script>
	import { title } from "process";
</script>

<style>
	.nav-tabs {
		border: none !important;
	}
	.workshops-section .tab-content {
		margin-top: 40px;
	}

	.workshops-type-switch .nav-link {
		background: transparent;
		border-bottom: 2px solid #dddddd;
		border-radius: 0;
		color: #637282;
		padding-right: 15px;
		padding-left: 15px;
	}

	.workshops-type-switch .nav-link.active {
		border: none !important;
		background: transparent;
		color: #1b2733;
		border-bottom: 2px solid #3bc1fd !important;
	}

	.workshops-single {
		-webkit-box-shadow: 0 0 20px rgba(27, 39, 51, 0.2);
		box-shadow: 0 0 20px rgba(27, 39, 51, 0.2);
		border-radius: 2%;
		padding: 30px;
	}

	.workshops-single:hover {
		-webkit-box-shadow: 0 0 40px rgba(0, 110, 255, 0.4);
		box-shadow: 0 0 40px rgba(0, 110, 255, 0.4);
	}

	.workshops-header {
		margin-bottom: 10px;
	}

	.workshops-title {
		text-align: center;
		display: block;
		margin-bottom: 20px;
		font-size: 22px;
		color: #1b2733;
	}

	.workshops-price {
		margin-bottom: 20px;
		color: #1b2733;
	}

	.workshops-price small {
		display: block;
		color: #637282;
		font-size: 16px;
		font-weight: 400;
	}

	.workshops-value {
		font-weight: 700;
		font-size: 26px;
		line-height: 40px;
		font-family: "Google Sans", sans-serif;
	}

	.workshops-currency {
		font-size: 18px;
		top: -28px;
		left: -10px;
		font-weight: normal;
		position: relative;
	}

	.workshops-list {
		list-style-type: none;
	}
	h6 {
		font-weight: 200;
	}

	.workshops-list .disabled {
		text-decoration: line-through;
		color: rgba(99, 114, 130, 0.5);
	}
	.workshops-list__item {
		color: #637282;
		margin: 10px 0;
		position: relative;
	}
	hr {
		height: 0.1px;
		background-color: rgba(99, 114, 130, 0.8);
	}
	.workshops-list__item:before {
		content: "";
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: rgba(27, 39, 51, 0.3);
		display: inline-block;
		margin-right: 10px;
		vertical-align: middle;
	}

	.workshops-footer {
		text-align: center;
		margin-top: 40px;
		padding-bottom: 20px;
	}

	.workshops-footer .assistive-text {
		font-size: 12px;
		margin-top: 5px;
	}
</style>

<section id="workshops" class="section-spacer workshops-section bg-very__gray">
	<div class="container">
		<header class="section-header text-center">
			<h2 class="section-title">Events & Workshops</h2>
			<p class="section-subtitle">
				Come learn, share and connect with us in person.
			</p>
		</header>

		<div class="workshops-type-switch">
			<ul class="nav nav-pills justify-content-center nav-tabs">
				<li class="nav-item">
					<a
						class="nav-link active"
						data-toggle="tab"
						href="#upcoming">Upcoming Events</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#past">Past
						Events</a>
				</li>
			</ul>
		</div>
		<div class="tab-content">
			<div
				class="tab-pane active"
				id="upcoming"
				role="tabpanel"
				aria-labelledby="upcoming">
				<div class="row justify-content-center">
					<!-- remove after first event -->
					<!-- <p style="width: 100%; text-align: center;">
						Stay tuned for our next event !!
					</p> -->
					<div class="col-md-4 col-12">
						<div class="card event-card">
							<img
								class="card-img-top"
								src="./images/assets/events/solution_challenge.png"
								alt="Info session" />
							<div class="card-body">
								<p class="tagging intermediate float-right">
									All
								</p>
								<h5 class="card-title">Solution Challenge</h5>

								<table>
									<tr>
										<td width="15%" class="text-blue">
											<i class="far fa-calendar-alt" />
										</td>
										<td>
											Deadline for submission: 15<sup>th</sup>
											November 2020
										</td>
									</tr>
									<tr>
										<td class="text-red">
											<i class="fas fa-map-marker-alt" />
										</td>
										<td>
											<a
												href="https://goo.gle/solutionchallenge"
												target="_blank"
												rel="noopener noreferrer">goo.gle/solutionchallenge</a>
										</td>
									</tr>
									<!-- <tr>
                                        <td class="text-green"><i class="far fa-clock"></i></td>
                                        <td>17:00 - 19:00</td>
                                    </tr> -->
								</table>

								<a
									href="https://dsc.community.dev/2021-solution-challenge/"
									class="button float-right">Register</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="tab-pane fade"
				id="past"
				role="tabpanel"
				aria-labelledby="past">
				<section class="section-spacer">
					<div class="container">
						<div
							class="row flex-column-reverse flex-sm-row align-items-cengit ter">
							<div class="col-sm-5 mr-auto">
								<div class="feature-list-wrapper">
									<div class="content-header">
										<h2 class="content-title">
											Android Study Jams
										</h2>
										<hr />
										<h6>
											DATE : 19<sup>th</sup>
											Dec 2020 to 25<sup>th</sup>
											Jan 2021
										</h6>
										<h6>Youtube Live</h6>
										<p>
											A community-driven program to help
											learn Android App Development
											through a specially curated online
											training course. The participants
											will learn the fundamentals of
											Android development, build a variety
											of apps using Kotlin, and earn
											badges/certificates along the way.
										</p>
									</div>
									<a
										href="https://bit.ly/android_dscnitt"
										class="past-event"
										target="_blank"
										rel="noopener">View Event&nbsp;&nbsp;</a>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="feature-list-image">
									<iframe
										title=""
										src="https://www.youtube.com/embed/videoseries?list=PL3vbBE23hWEO79QpYWMFzRiA818GFuo_E"
										frameborder="0"
										width="480"
										height="299"
										allowfullscreen="true"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										mozallowfullscreen="true"
										webkitallowfullscreen="true" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="hi" class="section-spacer bg-very__gray">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-sm-6">
								<div class="feature-list-image">
									<iframe
										title="Watch the live stream"
										src="https://www.youtube.com/embed/tOvrJkU3io8"
										frameborder="0"
										width="480"
										height="299"
										allowfullscreen="true"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										mozallowfullscreen="true"
										webkitallowfullscreen="true" />
								</div>
							</div>
							<div class="col-sm-5 ml-auto">
								<div class="feature-list-wrapper">
									<div class="content-header">
										<h2 class="content-title">
											Insight Into DSC
										</h2>
										<hr />
										<h6>DATE : 26<sup>th</sup> Sep 2020</h6>
										<p>
											Introducing Developer Students Clubs
											and the importance of communities
										</p>
									</div>
									<a
										href="https://dsc.community.dev/events/details/developer-student-clubs-national-institute-of-technology-tiruchirappalli-presents-insight-into-dsc/"
										class="past-event"
										target="_blank"
										rel="noopener">View Event&nbsp;&nbsp;<i
											class="fas
												fa-calendar-week" /></a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="section-spacer">
					<div class="container">
						<div
							class="row flex-column-reverse flex-sm-row align-items-cengit ter">
							<div class="col-sm-5 mr-auto">
								<div class="feature-list-wrapper">
									<div class="content-header">
										<h2 class="content-title">
											Get it Done with the Experts
										</h2>
										<hr />
										<h6>DATE : 15<sup>th</sup> Nov 2020</h6>
										<h6>Youtube Live</h6>
										<p>
											We concentrated on two parts of
											Flutter, that we admire most : The
											developer experience and brand
											design first development
										</p>
									</div>
									<a
										href="https://dsc.community.dev/e/mzcq54/"
										class="past-event"
										target="_blank"
										rel="noopener">View Event&nbsp;&nbsp;</a>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="feature-list-image">
									<iframe
										title=""
										src="https://www.youtube.com/embed/8qSgEL_as4Q"
										frameborder="0"
										width="480"
										height="299"
										allowfullscreen="true"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										mozallowfullscreen="true"
										webkitallowfullscreen="true" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<!--                <section id="past_ones" class="section-spacer bg-very__gray">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <div class="feature-list-image">
                                    <iframe data-urllink="https://docs.google.com/presentation/d/e/2PACX-1vQcG84BsN5LAUmvkvEUwK2h1euvoW6PZaSl4CnJfybQx0xgB6XbQTECqo4H1M56axzqzDBqJpPVrbeL/embed?start=false&loop=true&delayms=30000"
                                    frameborder="0" width="480" height="299" allowfullscreen="true"
                                    mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                                </div>
                            </div>
                            <div class="col-sm-5 ml-auto">
                                <div class="feature-list-wrapper">
                                    <div class="content-header">
                                        <h2 class="content-title">Build Your First App</h2>
                                        <hr>
                                        <h6>DATE : 6<sup>th</sup> July 2018</h6>
                                        <h6>VENUE : LH 1, Main Campus</h6>
                                        <p>We set up the Android Application Development Environment for creating,
                                        testing and debugging apps.</p>
                                    </div>
                                    <a href="#" class="past-event">EVENT PHOTOS&nbsp;&nbsp;<i class="fas fa-camera"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section-spacer">
                    <div class="container">
                        <div class="row flex-column-reverse flex-sm-row align-items-cengit ter">
                            <div class="col-sm-5 mr-auto">
                                <div class="feature-list-wrapper">
                                    <div class="content-header">
                                        <h2 class="content-title">DSC SSA Leads Summit</h2>
                                        <hr>
                                        <h6>DATE : 25<sup>th</sup> July - 28<sup>th</sup>July 2018</h6>
                                        <h6>WHERE : Lagos, Nigeria.</h6>
                                        <p>One of our lead organizers was privileged to represent the community in a lead summit hosted
                                        by Google Nigeria where he also talked about goal-setting.</p>
                                    </div>


                                    <a href="#" class="past-event" target="_blank" rel="noopener">EVENT PHOTOS&nbsp;&nbsp;<i class="fas fa-camera"></i></a>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-list-image">
                                    <iframe width="500" height="274"
                                    data-urllink="https://www.youtube.com/embed/AAin71VkbzQ"
                                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> -->
			</div>
		</div>
	</div>
</section>
