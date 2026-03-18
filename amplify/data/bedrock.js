export function request(ctx) {
  var ingredients = ctx.args.ingredients || [];

  var prompt =
    "Suggest a recipe using: " +
    ingredients.join(", ");

  return {
    resourcePath: "/model/amazon.nova-lite-v1:0/invoke",
    method: "POST",
    params: {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: [
              {
                text: prompt
              }
            ]
          }
        ]
      })
    }
  };
}

export function response(ctx) {
  if (ctx.error) {
    return {
      body: null,
      error: ctx.error.message || JSON.stringify(ctx.error)
    };
  }

  var parsedBody = JSON.parse(ctx.result.body);

  var text = "No response";

  if (
    parsedBody &&
    parsedBody.output &&
    parsedBody.output.message &&
    parsedBody.output.message.content &&
    parsedBody.output.message.content.length > 0 &&
    parsedBody.output.message.content[0].text
  ) {
    text = parsedBody.output.message.content[0].text;
  }

  return {
    body: text,
    error: null
  };
}

// console.log("FULL RESPONSE:", JSON.stringify(parsedBody));