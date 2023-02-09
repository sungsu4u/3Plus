<template>

        <div class="blob blue"></div>

</template>

<style scoped>



.blob {

	position: relative;

	border-radius: 50%;
	margin: 0px;
	height: 198px;
	width: 198px;

    /* for test purposes 
    */
    border: 1px solid black; 
}

.blob.blue {
	background: linear-gradient(135deg, #2723FF 0%, #1B91FF 100%);
	box-shadow: 0 0 0 0 linear-gradient(135deg, #2723FF 0%, #1B91FF 100%);
	animation: pulse-blue 1.1s ease-out infinite;
}

@keyframes pulse-blue {
	0% {
		transform: scale(0.4);
		box-shadow: 0 0 0 0 rgba(39, 35, 255, 0.4);
	}
	
	90% {
		transform: scale(0.40);
		box-shadow: 0 0 0 150px rgba(39, 35, 255, 0);
	}

	100% {
		transform: scale(0.4);
		box-shadow: 0 0 0 0 rgba(39, 35, 255, 0);
	}
}

</style>