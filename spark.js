var Spark = function(personalAccessToken) {
	this.baseUrl = "https://api.ciscospark.com/v1";
	this.contentType = "application/json; charset=utf-8";
	this.headers = {"Authorization": "Bearer " + personalAccessToken};
};

Spark.prototype.listPeople = function(email, displayName, max, callback) {
	$.ajax({
		type: "GET",
		url: this.baseUrl + "/people",
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"email": email,
			"displayName": displayName,
			"max": max
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.getPersonDetails = function(personId, callback) {
	$.ajax({
		type: "GET",
		url: this.baseUrl + "/people/" + personId,
		contentType: this.contentType,
		headers: this.headers
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.getMyDetails = function(callback) {
	$.ajax({
		type: "GET",
		url: this.baseUrl + "/people/me",
		contentType: this.contentType,
		headers: this.headers
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.listRooms = function(showSipAddress, max, callback) {
	$.ajax({
		type: "GET",
		url: this.baseUrl + "/rooms",
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"showSipAddress": showSipAddress,
			"max": max
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.createRoom = function(title, callback) {
	$.ajax({
		type: "POST",
		url: this.baseUrl + "/rooms",
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"title": title
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.getRoomDetails = function(showSipAddress, callback) {
	$.ajax({
		type: "GET",
		url: this.baseUrl + "/rooms",
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"showSipAddress": showSipAddress
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.updateRoom = function(roomId, title, callback) {
	$.ajax({
		type: "PUT",
		url: this.baseUrl + "/rooms/" + roomId,
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"title": title
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.deleteRoom = function(roomId, callback) {
	$.ajax({
		type: "DELETE",
		url: this.baseUrl + "/rooms/" + roomId,
		contentType: this.contentType,
		headers: this.headers
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.listMemberships = function(roomId, personId, personEmail, max, callback) {
	$.ajax({
		type: "GET",
		url: this.baseUrl + "/memberships",
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"roomId": roomId,
			"personId": personId,
			"personEmail": personEmail,
			"max": max
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.createMembership = function(roomId, personId, personEmail, isModerator, callback) {
	$.ajax({
		type: "POST",
		url: this.baseUrl + "/memberships",
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"roomId": roomId,
			"personId": personId,
			"personEmail": personEmail,
			"max": max
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.getMembershipDetails = function(membershipId, callback) {
	$.ajax({
		type: "GET",
		url: this.baseUrl + "/memberships/" + membershipId,
		contentType: this.contentType,
		headers: this.headers
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.updateMembership = function(isModerator, callback) {
	$.ajax({
		type: "PUT",
		url: this.baseUrl + "/memberships/" + membershipId,
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"isModerator": isModerator
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.deleteMembership = function(membershipId, callback) {
	$.ajax({
		type: "DELETE",
		url: this.baseUrl + "/memberships/" + membershipId,
		contentType: this.contentType,
		headers: this.headers
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.listMessages = function(roomId, before, beforeMessage, max, callback) {
	$.ajax({
		type: "GET",
		url: this.baseUrl + "/messages",
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"roomId": roomId,
			"before": before,
			"beforeMessage": beforeMessage,
			"max": max
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.createMessage = function(roomId, text, files, toPersonId, toPersonEmail, callback) {
	$.ajax({
		type: "POST",
		url: this.baseUrl + "/messages",
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"roomId": roomId,
			"text": text,
			"files": files,
			"toPersonId": personId,
			"toPersonEmail": toPersonEmail
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.getMessageDetails = function(messageId, callback) {
	$.ajax({
		type: "GET",
		url: this.baseUrl + "/messages/" + messageId,
		contentType: this.contentType,
		headers: this.headers
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.deleteMessage = function(messageId, callback) {
	$.ajax({
		type: "DELETE",
		url: this.baseUrl + "/messages/" + messageId,
		contentType: this.contentType,
		headers: this.headers
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.listWebhooks = function(max, callback) {
	$.ajax({
		type: "GET",
		url: this.baseUrl + "/webhooks",
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"max": max
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.createWebhook = function(name, targetUrl, resource, event, filter, callback) {
	$.ajax({
		type: "POST",
		url: this.baseUrl + "/webhooks",
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"name": name,
			"targetUrl": targetUrl,
			"resource": resource,
			"event": event,
			"filter": filter
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.getWebhookDetails = function(webhookId, callback) {
	$.ajax({
		type: "POST",
		url: this.baseUrl + "/webhooks/" + webhookId,
		contentType: this.contentType,
		headers: this.headers
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.updateWebhook = function(webhookId, name, targetUrl, callback) {
	$.ajax({
		type: "PUT",
		url: this.baseUrl + "/webhooks/" + webhookId,
		contentType: this.contentType,
		headers: this.headers,
		data: JSON.stringify({
			"name": name,
			"targetUrl": targetUrl
		})
	}).done(function(response) {
		callback(response);
	});
};

Spark.prototype.deleteWebhook = function(webhookId, callback) {
	$.ajax({
		type: "DELETE",
		url: this.baseUrl + "/webhooks/" + webhookId,
		contentType: this.contentType,
		headers: this.headers
	}).done(function(response) {
		callback(response);
	});
};