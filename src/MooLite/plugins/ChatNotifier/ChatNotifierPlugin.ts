import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { ChatMessage } from "src/MooLite/core/chat/ChatMessage";

export class ChatNotifierPlugin extends MooLitePlugin {
    name = "Chat Notifier";
    key = "chat-notifier";
    description = "Notifies your of chat messages";

    targetWords: string = "Word1, Word2";

    onChatMessage(message: ChatMessage): void {
        const words = this.targetWords.replaceAll(", ", ",").split(",");
        words.forEach((word) => {
            if (message.message.toLowerCase().includes(word.toLowerCase())) {
                console.log(`Word found: ${word}`);
                return;
            }
        });
    }
}
