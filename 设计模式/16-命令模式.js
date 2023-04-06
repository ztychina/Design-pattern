class Receiver{
    execute(){
        console.log('receiver-execute');
    }
}
class Command{
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute(){
        console.log('command-execute')
        this.receiver.execute();
    }
}
class Invoker{
    constructor(command) {
        this.command = command;
    }
    order(){
        console.log('invoker-execute');
        this.command.execute();
    }
}
const order = new Command(new Receiver());
const client = new Invoker(order);
client.order();