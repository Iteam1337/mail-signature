<script>
    export const prerender = true;
	let name = '';
	let title = '';
	let email = '';
	let phone = '';
</script>

<div>
	<h1>Mail Signature</h1>
	<h2>1. Enter your details</h2>

	<!-- Namn -->
	<label for="name">Name:</label>
	<input id="name" type="text" bind:value={name} placeholder="Förnamn Efternamn" />
	<br />

	<!-- Titel -->
	<label for="title"> Title:</label>
	<input id="title" type="text" bind:value={title} placeholder="Yrkestitel" />
	<br />

	<!-- E-postadress -->
	<label for="email">Email:</label>
	<input id="email" type="text" bind:value={email} placeholder="fornamn.efternamn@iteam.se" />
	<br />

	<!-- Telefon -->
	<label for="phone">Phone:</label>
	<input id="phone" type="text" bind:value={phone} placeholder="+46 NNN NN NN NN" />
	<br />

	<h2>2. Copy your signature to your mail client</h2>

	<div>
		<table cellpadding="0" cellspacing="0" style="border:0; font-family: Arial, sans-serif;">
			<tr>
				<td style="padding-right: 15px;">
					<img
						src="https://iteam.se/apple-touch-icon.png"
						alt="Iteam Logo"
						height="105"
						style="display: block;"
					/>
				</td>
				<td style="vertical-align: middle;">
					<p style="font-weight: bold; margin: 0;">{name}</p>
					<p style="margin: 0 0 5px 0;">{title}</p>
					<p style="margin: 0;">
						<a href="tel:{phone}" style="color: #000000; text-decoration: none;">{phone}</a>
					</p>
					<p style="margin: 0;">
						<a href="mailto:{email}" style="color: #FF3B5C; text-decoration: none;">{email}</a>
					</p>
					<p style="margin: 0;">
						<a href="https://www.iteam.se" style="color: #FF3B5C; text-decoration: none;"
							>www.iteam.se</a
						>
					</p>
				</td>
			</tr>
		</table>
	</div>
</div>
