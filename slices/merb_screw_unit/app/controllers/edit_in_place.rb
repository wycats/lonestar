class MerbScrewUnit::EditInPlace < MerbScrewUnit::Application

  def spec
    @spec_url = url(:controller => "merb_screw_unit/edit_in_place", :action => "index")
    render
  end
    
  def index
    render :layout => "spec"
  end
    
end