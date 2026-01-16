<template>
  <div class="editor">
    <v-btn :icon="mdiFormatBold" @click="bold"></v-btn>
    <v-btn :icon="mdiFormatListBulleted" @click="bulletList"></v-btn>

    <editor-content :editor="editor" />
  </div>
</template>

<script setup>
  import { Editor, EditorContent } from '@tiptap/vue-3';
  import StarterKit from '@tiptap/starter-kit';
  import BulletList from '@tiptap/extension-bullet-list';
  import { Paragraph } from '@tiptap/extension-paragraph';
  import Heading from '@tiptap/extension-heading';
  import ListItem from '@tiptap/extension-list-item';
  import Underline from '@tiptap/extension-underline';
  import { mdiFormatBold, mdiFormatListBulleted } from '@mdi/js';

  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
  });

  const toggle = ref(0);

  const header = () => editor.value.chain().focus().toggleHeading({ level: 4 }).run();
  const bold = () => editor.value.chain().focus().toggleBold().run();
  const bulletList = () => editor.value.chain().focus().toggleBulletList().run();

  const emit = defineEmits(['update:modelValue']);

  const editor = ref(null);

  // const CustomDocument = Document.extend({
  // 	content: 'heading block*',
  // })

  onMounted(() => {
    editor.value = new Editor({
      extensions: [
        // CustomDocument,
        Underline,
        StarterKit.configure({
          document: true,
        }),
        BulletList.configure({
          HTMLAttributes: {
            class: 'list__item',
          },

          itemTypeName: 'listItem',
        }),
        Paragraph,
        Text,
        Heading.configure({
          levels: [1, 2, 3, 4, 5],
        }),
        ListItem,
      ],
      content: props.modelValue,
      onUpdate: () => {
        emit('update:modelValue', editor.value.getHTML());
      },
    });
  });
</script>

<style lang="scss">
  .menu {
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 4px 0;

    &__icon {
      height: 20px;
      cursor: pointer;
    }

    border-bottom: 1px solid black;
  }

  .editor {
    border-radius: 7px;
    padding: 10px;
    border: 1px solid white;
    min-height: 200px;
  }

  input[type='checkbox' i] {
    background: none;
  }

  ul[data-type='taskList'] {
    list-style: none;
    padding: 0;

    p {
      margin: 0;
    }

    li {
      display: flex;
      padding-top: 10px;

      label input {
        background: none;
      }

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }
    }
  }

  .editor,
  .editor > * {
    outline: none;
  }

  .ProseMirror {
    outline: none;

    > * + * {
      margin-top: 0.75em;
    }
  }

  .ProseMirror > * + * {
    margin-top: 5px;
  }

  .ProseMirror ol > li {
    margin-left: 20px;
  }

  h2 {
    font-size: 20px;
  }

  //

  //
  .tableWrapper {
    padding: 1rem 0;
    overflow-x: auto;
  }

  .ProseMirror {
    min-height: 140px !important;
  }
</style>
