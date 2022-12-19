function addTodo() {
    $(".add").attr("disabled", true)
    let text =  $(".area").find(".input").val()
    $(".area").find(".input").val("")
    let content = $(`
    <div class="todo">
        <input type="checkbox" id="checker">
        <p class="task">${text}</p>
        <span class="trash">
        <i class="fas fa-trash-can del"></i>
        </span>
        </div>
        `)
        $(".area").find(".todos").prepend(content)
        $("#checker").on('change', function () {
            let trash = $(this).parent().find(".trash")
            if (($(this).prop("checked"))) {
                trash.show()
                console.log("Done");
                trash.click(function () {
                    $(this).parent().remove()
                })
            }
            else{
                trash.hide()
            }
        })
}