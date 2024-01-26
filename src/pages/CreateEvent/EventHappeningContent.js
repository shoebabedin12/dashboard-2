import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

const EventHappeningContent = () => {
  const editorRef = useRef(null);
  // const [addArtist, setAddArtist] = useState(false);
  return (
    <>
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Contents</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Event Thumbnail Image</label>
              </div>
              <div className="dash_main_main_table_form_up">
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
              </div>
              <div className="single_input_box_des oflow-hd">
                <p>The size should be 1000x500 PX</p>
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="avatar">Banner Images</label>
              </div>
              <div className="dash_main_main_table_form_up">
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
              </div>
              <div className="single_input_box_des oflow-hd">
                <p>The size should be 1000x500 PX</p>
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Event Summary</label>
                <div className="single_input_box_editor">
                  {/* <textarea></textarea> */}
                  <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    init={{
                      selector: 'textarea',
                      placeholder: 'Write here....',
                      height: 300,
                      menubar: false,
                      plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                        'code',
                        'help',
                        'wordcount'
                      ],

                      toolbar:
                        'undo redo | ' +
                        'styles | bold italic underline forecolor superscript subscript | blockquote | alignleft aligncenter | quicklink  ' +
                        'alignright alignjustify | bullist numlist outdent indent | table ' +
                        'removeformat |  link image | formatting quickimage quicktable flipv fliph | editimage imageoptions | hr pagebreak | help ',
                      table_toolbar:
                        'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                      toolbar_mode: 'wrap' | 'scrolling',
                      toolbar_sticky: true,
                      toolbar_sticky_offset: 100
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHappeningContent;
