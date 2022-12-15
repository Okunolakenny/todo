function TodoArea() {
    let content = $(`
        <div class="area">
            <h1>Todo</h1>
            <div class="inputArea">
                <input type="text" class="input">
                <button class="add">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
            <div class="todos">
            </div>
        </div>
    `)
    $("main").append(content)
    $(".add").attr("disabled", true)
    $(".input").on('input', function() {
        if ($(this).val().length === 0) {
            $(".add").attr("disabled", true)
        }else{
            $(".add").attr("disabled", false)
        }
    })
    $(".add").click(addTodo)
}

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
TodoArea()