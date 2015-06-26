
(function(formModule,preview) {
	var fe=document.getElementById("hcard-form");
	var f= new formModule(fe);
	f.addFields("givenName")
		.addFields("lastName")
			.addFields("email")
				.addFields("phone")
					.addFields("houseName")
						.addFields("streetName")
							.addFields("suburb")
								.addFields("state")
									.addFields("postcode")
										.addFields("country");
	f.attachValEvent(function(){
		preview.ele("phone").onkeyup=function(){
			f.check();
			preview.phonePreview("phone","p-phone");	
		}
		preview.ele("phone").onchange=function(){
			f.check();
			preview.phonePreview("phone","p-phone");	
		}
	});
	//-----------------------------------------------
	
})(formModule,preview);
