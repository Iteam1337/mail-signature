<script>
	let email = 'alexander';
	let name = 'Alexander Czigler';
	let office = 'Göteborg';
	let phone = '+46 727 14 50 60';
	let title = 'Kattvakt';
</script>

<h1>Mail Signature</h1>
<h2>1. Enter your details</h2>
<p>
	Email: <input type="text" bind:value={email} />@iteam.se<br />
	Name: <input type="text" bind:value={name} /><br />
	Office:
	<select bind:value={office}>
		<option selected>Göteborg</option>
		<option>Stockholm</option>
	</select><br />
	Phone: <input type="text" bind:value={phone} /><br />
	Title: <input type="text" bind:value={title} /><br />
</p>

<h2>2. Copy your signature to your mail client</h2>
<div id="signature">
	<div class="logo">
		<img src="favicon.png" alt="Iteam" />
	</div>
	<div>
		<div class="name-and-title">
			<span class="name">{name}</span>
			/
			<span>{title}</span>
		</div>
		<div class="email-and-phone">
			{email}@iteam.se / {phone}
		</div>

		<div class="company-title">Iteam</div>
		<div class="visiting-address">Haga Kyrkogata 28, 411 23 Göteborg</div>
		<div class="www"><a href="www.iteam.se" target="_blank">www.iteam.se</a></div>
		<div>Psst, du vet väl att vi finns i Stockholm också?</div>
	</div>
</div>

<style>
	#signature {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: stretch;
		align-content: stretch;
	}

	#signature > .logo {
		margin-right: 10px;
	}

	#signature > .logo > img {
		height: 120px;
		width: 120px;
	}

	span.name {
		font-weight: bold;
	}

	div.company-title {
		font-weight: bold;
		margin-top: 12px;
	}
</style>
