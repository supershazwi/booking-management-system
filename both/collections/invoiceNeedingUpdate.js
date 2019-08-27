InvoiceNeedingUpdate = new Mongo.Collection('invoiceNeedingUpdate');



Meteor.methods({
  checkInvoiceNeedingUpdate: function(bookingId) {
    this.unblock();
  	if(InvoiceNeedingUpdate.findOne({bookingId: bookingId}) == undefined) {
  		var invoiceNeedingUpdate = InvoiceNeedingUpdate.insert({
			bookingId: bookingId
		});
  	}
  },
  checkOtherInvoiceNeedingUpdate: function(otherId) {
    this.unblock();
  	if(InvoiceNeedingUpdate.findOne({otherId: otherId}) == undefined) {
  		var invoiceNeedingUpdate = InvoiceNeedingUpdate.insert({
			otherId: otherId
		});
  	}
  }
});