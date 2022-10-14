<script>
	export const prerender = true;

	let email = 'alexander';
	let name = 'Alexander Czigler';
	let office = 'Göteborg';
	let phone = '+46 727 14 50 60';
	let title = 'Kattvakt';

	let otherOffice = 'Stockholm';
	let officeAddress = 'Haga Kyrkogata 28, 411 23 Göteborg';

	const selectOffice = () => {
		if (office === 'Göteborg') {
			officeAddress = 'Haga Kyrkogata 28, 411 23 Göteborg';
			otherOffice = 'Stockholm';
		} else {
			otherOffice = 'Göteborg';
			officeAddress = 'Götgatan 18, 118 46 Stockholm';
		}
	};
</script>

<h1>Mail Signature</h1>
<h2>1. Enter your details</h2>
<p>
	Email: <input type="text" bind:value={email} />@iteam.se<br />
	Name: <input type="text" bind:value={name} /><br />
	Office:
	<select bind:value={office} on:change={selectOffice}>
		<option selected>Göteborg</option>
		<option>Stockholm</option>
	</select><br />
	Phone: <input type="text" bind:value={phone} /><br />
	Title: <input type="text" bind:value={title} /><br />
</p>

<h2>2. Copy your signature to your mail client</h2>

<tbody
	><tr><td style="font-size:0px;height: 12px;" /></tr>
	<tr
		><td>
			<table
				cellpadding="0"
				cellspacing="0"
				style="border-collapse: collapse; font-family: Helvetica, Arial, sans-serif; color:#000;"
			>
				<tbody
					><tr>
						<td
							style="vertical-align: top; padding: 0.01px 5px 0.01px 1px; width: 65px; text-align: center;"
						>
							<img
								src="favicon.png"
								height="80"
								width="80"
								style=" width:80px; vertical-align: middle; border-radius:0; height: 80px;"
								alt="Iteam"
							/>
						</td>
						<td valign="top" style="padding: 0.01px 0.01px 0.01px 5px; vertical-align:top;">
							<table cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
								<tbody
									><tr>
										<td
											style="line-height: 0.9; padding: 0.01px; font-family: Helvetica, Arial, sans-serif;"
										>
											<span
												data-acs="name"
												style=" text-transform: initial; font-weight: bold; color: #000000; letter-spacing: 0px; line-height: 0.9; font-size: 11px;"
											>
												{name}
											</span>
											<span
												data-acs="name"
												style=" text-transform: initial; color: #000000; letter-spacing: 0px; line-height: 0.9; font-size: 11px;"
											>
												/ {title}
											</span>

											<br />
											<span
												data-acs="title"
												style=" text-transform: initial; color: #ff3b5c; line-height: 0.9; font-size: 11px;"
											>
												<a
													href="mailto:{email.toLowerCase()}@iteam.se"
													style="color: #ff3b5c; text-decoration: none; font-size: 11px;"
													>{email.toLowerCase()}@iteam.se</a
												>
											</span>
											<span
												data-acs="name"
												style=" text-transform: initial; color: #000000; letter-spacing: 0px; line-height: 0.9; font-size: 11px;"
											>
												/ {phone}
											</span>
											<br /><br />

											<span
												data-acs="title"
												style=" text-transform: initial; font-weight: bold; color: #000000; letter-spacing: 0px; line-height: 0.9; font-size: 11px;"
											>
												Iteam
											</span>
											<br />
											<span
												data-acs="title"
												style=" text-transform: initial; color: #000000; letter-spacing: 0px; line-height: 0.9; font-size: 11px;"
											>
												{officeAddress}
											</span>
											<br />
											<span
												data-acs="title"
												style=" text-transform: initial; color: #ff3b5c; letter-spacing: 0px; line-height: 0.9; font-size: 11px;"
											>
												<a
													href="https://www.iteam.se"
													target="_blank"
													style="color: #ff3b5c; text-decoration: none; font-size: 11px;"
													>www.iteam.se</a
												>
											</span>
											<br />
											<span
												data-acs="title"
												style=" text-transform: initial; color: #000000; letter-spacing: 0px; line-height: 0.9; font-size: 11px;"
											>
												Psst, du vet väl att vi finns i {otherOffice} också?
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
			<table cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width:100%;">
				<tbody><tr><td style="line-height:00.8" /></tr></tbody>
			</table>
		</td></tr
	>
</tbody>
