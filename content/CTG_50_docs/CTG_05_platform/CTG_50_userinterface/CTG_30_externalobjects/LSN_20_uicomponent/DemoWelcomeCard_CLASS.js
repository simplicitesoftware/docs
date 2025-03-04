Simplicite.UI.ExternalObjects.DemoWelcomeCard = class extends Simplicite.UI.ExternalObject {
    async render(params, data = {})
    {
        let app = $ui.getApp();
        let product = app.getBusinessObject("DemoProduct");
        let user = app.getBusinessObject("User");
        let login = $ui.getGrant().login;
        

        $("#demowelcomecard-header")
            .append($('<h1>').text("Welcome to Simplicité's Demo !"))
            .append($('<h3>').text("We're excited to have you onboard. Explore, interact, and enjoy your experience with us !"));

        $("#demowelcomecard-actions")
            .append($('<button/>').text("Check the Tutorial").attr("id", "tutorial").addClass("demowelcomecard-btn").on("click", () => { window.open("https://docs.simplicite.io/", "_blank"); } ))
            .append($('<button/>').text("Display Products").attr("id","products").addClass("demowelcomecard-btn").on("click", () => {
            	console.log("HELLO MISTER USER");
            	let b = document.getElementById("demowelcomecard-productlist").hidden;
            	document.getElementById("demowelcomecard-productlist").hidden = !b;
            } ))
            .append($('<button/>').text("See my Infos").attr("id","user-infos").addClass("demowelcomecard-btn").on("click", () => {
            	user.search( function(){
					const usr = user.list.find(u => u.usr_login === login);
					
					if (usr && usr.row_id) {
						$ui.displayForm(null, "User", usr.row_id, {
							nav: "add",
							target: "work"
						});
					} else {
						console.error("User not found.");
					}
		        }, null, {});
            } ));
		
        product.search(function() {
            for (let i=0; i<product.count; i++)
            {
                const prd = product.list[i];
                const imageSource = `data:${prd.demoPrdPicture.mime};base64,${prd.demoPrdPicture.content}`;
                
                let productDiv = $('<div>').addClass("demowelcomecard-product-card").on("click", () => {
                	// triggers an error but still saves & runs ...
                	$ui.displayForm(null, "DemoProduct", prd.row_id, {
						nav: "add",
						target: "work"
					});
                });
   
                let cardLeft = $('<div>').addClass("dwc-product-card-left");
                
                let cardLeftHeader = $('<div>').addClass("dwc-product-card-left-header");
                let cardLeftHeaderTitle = $('<span>').addClass("dwc-product-card-left-header-title").text(prd.demoPrdName);
                let cardLeftHeaderSubtitle = $('<span>').addClass("dwc-product-card-left-header-subtitle").text(prd.demoPrdSupId__demoSupName+" - "+prd.demoPrdType);
                
                cardLeftHeader
                	.append(cardLeftHeaderTitle)
                	.append(cardLeftHeaderSubtitle);
                
                let cardLeftFooter = $('<div>').addClass("dwc-product-card-left-footer");
                let cardLeftFooterStock = $('<span>').addClass("dwc-product-card-left-footer-stock").text(prd.demoPrdStock+" left in stock.");
                let cardLeftFooterPrice = $('<span>').addClass("dwc-product-card-left-footer-price").text(prd.demoPrdUnitPrice+"€");
                
                cardLeftFooter
                	.append(cardLeftFooterStock)
                	.append(cardLeftFooterPrice);
                
                cardLeft
                	.append(cardLeftHeader)
                	.append(cardLeftFooter);
                
                let cardRight = $('<div>').addClass("demowelcomecard-product-card-right");
                
                let cardRightImage = $('<img/>').addClass("dwc-product-card-right-image").attr("src", imageSource).attr("alt", prd.demoPrdName);
                let cardRightText = $('<span>').addClass("dwc-product-card-right-description").text('"'+prd.demoPrdDescription+'"');
                
                
                cardRight
                	.append(cardRightImage)
                	.append(cardRightText);

                productDiv
                	.append(cardLeft)
                	.append(cardRight);
                
                $("#demowelcomecard-productlist").append(productDiv);
            }
            
            $("#demowelcomecard-productlist").attr("hidden", "true"); // hiding by default
            
        }, null, { inlineDocs: true });
	}
};